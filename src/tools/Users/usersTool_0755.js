/**
 * Generated Tool: usersTool_0755
 * Domain: Users
 * ID: 0755
 */
exports.usersTool_0755 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0755:', error);
    throw error;
  }
};
