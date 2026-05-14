/**
 * Generated Tool: usersTool_0881
 * Domain: Users
 * ID: 0881
 */
exports.usersTool_0881 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0881:', error);
    throw error;
  }
};
