/**
 * Generated Tool: usersTool_0251
 * Domain: Users
 * ID: 0251
 */
exports.usersTool_0251 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0251:', error);
    throw error;
  }
};
