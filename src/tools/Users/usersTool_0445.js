/**
 * Generated Tool: usersTool_0445
 * Domain: Users
 * ID: 0445
 */
exports.usersTool_0445 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0445:', error);
    throw error;
  }
};
