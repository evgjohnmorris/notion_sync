/**
 * Generated Tool: usersTool_0486
 * Domain: Users
 * ID: 0486
 */
exports.usersTool_0486 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0486:', error);
    throw error;
  }
};
