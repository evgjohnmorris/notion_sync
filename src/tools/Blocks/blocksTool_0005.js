/**
 * Generated Tool: blocksTool_0005
 * Domain: Blocks
 * ID: 0005
 */
exports.blocksTool_0005 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0005:', error);
    throw error;
  }
};
