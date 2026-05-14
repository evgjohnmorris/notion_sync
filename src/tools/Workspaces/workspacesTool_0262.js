/**
 * Generated Tool: workspacesTool_0262
 * Domain: Workspaces
 * ID: 0262
 */
exports.workspacesTool_0262 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0262:', error);
    throw error;
  }
};
