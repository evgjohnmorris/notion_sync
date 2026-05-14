/**
 * Generated Tool: usersTool_0189
 * Domain: Users
 * ID: 0189
 */
exports.usersTool_0189 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0189:', error);
    throw error;
  }
};
