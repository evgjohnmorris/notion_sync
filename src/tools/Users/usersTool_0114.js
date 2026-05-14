/**
 * Generated Tool: usersTool_0114
 * Domain: Users
 * ID: 0114
 */
exports.usersTool_0114 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0114:', error);
    throw error;
  }
};
