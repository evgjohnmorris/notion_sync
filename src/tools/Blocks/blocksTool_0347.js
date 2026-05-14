/**
 * Generated Tool: blocksTool_0347
 * Domain: Blocks
 * ID: 0347
 */
exports.blocksTool_0347 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0347:', error);
    throw error;
  }
};
