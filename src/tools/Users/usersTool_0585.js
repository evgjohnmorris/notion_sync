/**
 * Generated Tool: usersTool_0585
 * Domain: Users
 * ID: 0585
 */
exports.usersTool_0585 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0585:', error);
    throw error;
  }
};
