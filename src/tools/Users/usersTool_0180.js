/**
 * Generated Tool: usersTool_0180
 * Domain: Users
 * ID: 0180
 */
exports.usersTool_0180 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0180:', error);
    throw error;
  }
};
