/**
 * Generated Tool: usersTool_0871
 * Domain: Users
 * ID: 0871
 */
exports.usersTool_0871 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0871:', error);
    throw error;
  }
};
