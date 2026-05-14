/**
 * Generated Tool: usersTool_0233
 * Domain: Users
 * ID: 0233
 */
exports.usersTool_0233 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0233:', error);
    throw error;
  }
};
