/**
 * Generated Tool: usersTool_0440
 * Domain: Users
 * ID: 0440
 */
exports.usersTool_0440 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0440:', error);
    throw error;
  }
};
