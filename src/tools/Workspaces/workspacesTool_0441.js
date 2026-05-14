/**
 * Generated Tool: workspacesTool_0441
 * Domain: Workspaces
 * ID: 0441
 */
exports.workspacesTool_0441 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0441:', error);
    throw error;
  }
};
