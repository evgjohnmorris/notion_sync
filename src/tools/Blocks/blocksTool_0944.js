/**
 * Generated Tool: blocksTool_0944
 * Domain: Blocks
 * ID: 0944
 */
exports.blocksTool_0944 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0944:', error);
    throw error;
  }
};
