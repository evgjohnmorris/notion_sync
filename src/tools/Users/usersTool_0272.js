/**
 * Generated Tool: usersTool_0272
 * Domain: Users
 * ID: 0272
 */
exports.usersTool_0272 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0272:', error);
    throw error;
  }
};
