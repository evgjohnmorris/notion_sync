/**
 * Generated Tool: workspacesTool_0326
 * Domain: Workspaces
 * ID: 0326
 */
exports.workspacesTool_0326 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0326:', error);
    throw error;
  }
};
