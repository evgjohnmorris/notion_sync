/**
 * Generated Tool: usersTool_0427
 * Domain: Users
 * ID: 0427
 */
exports.usersTool_0427 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0427:', error);
    throw error;
  }
};
