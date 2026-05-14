/**
 * Generated Tool: usersTool_0874
 * Domain: Users
 * ID: 0874
 */
exports.usersTool_0874 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0874:', error);
    throw error;
  }
};
