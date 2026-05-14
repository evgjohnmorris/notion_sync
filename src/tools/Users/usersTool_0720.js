/**
 * Generated Tool: usersTool_0720
 * Domain: Users
 * ID: 0720
 */
exports.usersTool_0720 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0720:', error);
    throw error;
  }
};
