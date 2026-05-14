/**
 * Generated Tool: usersTool_0998
 * Domain: Users
 * ID: 0998
 */
exports.usersTool_0998 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0998:', error);
    throw error;
  }
};
