/**
 * Generated Tool: workspacesTool_0184
 * Domain: Workspaces
 * ID: 0184
 */
exports.workspacesTool_0184 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0184:', error);
    throw error;
  }
};
