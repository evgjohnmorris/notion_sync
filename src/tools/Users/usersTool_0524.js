/**
 * Generated Tool: usersTool_0524
 * Domain: Users
 * ID: 0524
 */
exports.usersTool_0524 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0524:', error);
    throw error;
  }
};
