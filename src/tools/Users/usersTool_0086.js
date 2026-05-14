/**
 * Generated Tool: usersTool_0086
 * Domain: Users
 * ID: 0086
 */
exports.usersTool_0086 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0086:', error);
    throw error;
  }
};
