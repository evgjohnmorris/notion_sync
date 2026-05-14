/**
 * Generated Tool: usersTool_0924
 * Domain: Users
 * ID: 0924
 */
exports.usersTool_0924 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0924:', error);
    throw error;
  }
};
