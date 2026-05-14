/**
 * Generated Tool: usersTool_0103
 * Domain: Users
 * ID: 0103
 */
exports.usersTool_0103 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0103:', error);
    throw error;
  }
};
