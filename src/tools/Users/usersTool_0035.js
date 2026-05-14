/**
 * Generated Tool: usersTool_0035
 * Domain: Users
 * ID: 0035
 */
exports.usersTool_0035 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0035:', error);
    throw error;
  }
};
