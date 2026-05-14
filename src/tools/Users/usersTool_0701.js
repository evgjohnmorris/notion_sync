/**
 * Generated Tool: usersTool_0701
 * Domain: Users
 * ID: 0701
 */
exports.usersTool_0701 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0701:', error);
    throw error;
  }
};
