/**
 * Generated Tool: usersTool_0644
 * Domain: Users
 * ID: 0644
 */
exports.usersTool_0644 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0644:', error);
    throw error;
  }
};
