/**
 * Generated Tool: usersTool_0553
 * Domain: Users
 * ID: 0553
 */
exports.usersTool_0553 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0553:', error);
    throw error;
  }
};
