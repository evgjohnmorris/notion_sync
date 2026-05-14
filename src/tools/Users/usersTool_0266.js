/**
 * Generated Tool: usersTool_0266
 * Domain: Users
 * ID: 0266
 */
exports.usersTool_0266 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0266:', error);
    throw error;
  }
};
