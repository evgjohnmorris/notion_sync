/**
 * Generated Tool: usersTool_0426
 * Domain: Users
 * ID: 0426
 */
exports.usersTool_0426 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0426:', error);
    throw error;
  }
};
