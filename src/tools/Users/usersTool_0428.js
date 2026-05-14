/**
 * Generated Tool: usersTool_0428
 * Domain: Users
 * ID: 0428
 */
exports.usersTool_0428 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0428:', error);
    throw error;
  }
};
