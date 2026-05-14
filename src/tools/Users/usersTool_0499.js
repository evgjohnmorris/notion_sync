/**
 * Generated Tool: usersTool_0499
 * Domain: Users
 * ID: 0499
 */
exports.usersTool_0499 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0499:', error);
    throw error;
  }
};
