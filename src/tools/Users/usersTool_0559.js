/**
 * Generated Tool: usersTool_0559
 * Domain: Users
 * ID: 0559
 */
exports.usersTool_0559 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0559:', error);
    throw error;
  }
};
