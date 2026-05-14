/**
 * Generated Tool: usersTool_0790
 * Domain: Users
 * ID: 0790
 */
exports.usersTool_0790 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0790:', error);
    throw error;
  }
};
