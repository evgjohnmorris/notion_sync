/**
 * Generated Tool: usersTool_0025
 * Domain: Users
 * ID: 0025
 */
exports.usersTool_0025 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0025:', error);
    throw error;
  }
};
