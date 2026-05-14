/**
 * Generated Tool: usersTool_0612
 * Domain: Users
 * ID: 0612
 */
exports.usersTool_0612 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0612:', error);
    throw error;
  }
};
