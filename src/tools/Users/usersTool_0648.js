/**
 * Generated Tool: usersTool_0648
 * Domain: Users
 * ID: 0648
 */
exports.usersTool_0648 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0648:', error);
    throw error;
  }
};
