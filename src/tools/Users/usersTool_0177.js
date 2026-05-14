/**
 * Generated Tool: usersTool_0177
 * Domain: Users
 * ID: 0177
 */
exports.usersTool_0177 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0177:', error);
    throw error;
  }
};
