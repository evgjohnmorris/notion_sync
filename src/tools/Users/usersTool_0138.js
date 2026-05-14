/**
 * Generated Tool: usersTool_0138
 * Domain: Users
 * ID: 0138
 */
exports.usersTool_0138 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0138:', error);
    throw error;
  }
};
