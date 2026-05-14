/**
 * Generated Tool: usersTool_0387
 * Domain: Users
 * ID: 0387
 */
exports.usersTool_0387 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0387:', error);
    throw error;
  }
};
