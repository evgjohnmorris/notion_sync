/**
 * Generated Tool: usersTool_0337
 * Domain: Users
 * ID: 0337
 */
exports.usersTool_0337 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0337:', error);
    throw error;
  }
};
