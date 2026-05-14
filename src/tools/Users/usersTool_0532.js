/**
 * Generated Tool: usersTool_0532
 * Domain: Users
 * ID: 0532
 */
exports.usersTool_0532 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0532:', error);
    throw error;
  }
};
