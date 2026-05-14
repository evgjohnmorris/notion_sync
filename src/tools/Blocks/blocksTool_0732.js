/**
 * Generated Tool: blocksTool_0732
 * Domain: Blocks
 * ID: 0732
 */
exports.blocksTool_0732 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0732:', error);
    throw error;
  }
};
