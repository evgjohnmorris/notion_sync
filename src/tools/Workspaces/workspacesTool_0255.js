/**
 * Generated Tool: workspacesTool_0255
 * Domain: Workspaces
 * ID: 0255
 */
exports.workspacesTool_0255 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0255:', error);
    throw error;
  }
};
