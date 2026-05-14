/**
 * Generated Tool: usersTool_0817
 * Domain: Users
 * ID: 0817
 */
exports.usersTool_0817 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0817:', error);
    throw error;
  }
};
