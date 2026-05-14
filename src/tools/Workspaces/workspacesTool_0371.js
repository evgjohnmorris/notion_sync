/**
 * Generated Tool: workspacesTool_0371
 * Domain: Workspaces
 * ID: 0371
 */
exports.workspacesTool_0371 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0371:', error);
    throw error;
  }
};
