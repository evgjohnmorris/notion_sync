/**
 * Generated Tool: usersTool_0654
 * Domain: Users
 * ID: 0654
 */
exports.usersTool_0654 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0654:', error);
    throw error;
  }
};
