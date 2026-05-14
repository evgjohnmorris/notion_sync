/**
 * Generated Tool: usersTool_0227
 * Domain: Users
 * ID: 0227
 */
exports.usersTool_0227 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0227:', error);
    throw error;
  }
};
