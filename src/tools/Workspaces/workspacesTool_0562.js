/**
 * Generated Tool: workspacesTool_0562
 * Domain: Workspaces
 * ID: 0562
 */
exports.workspacesTool_0562 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0562:', error);
    throw error;
  }
};
